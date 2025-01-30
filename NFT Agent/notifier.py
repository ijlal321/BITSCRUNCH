import smtplib
from email.message import EmailMessage
from config import EMAIL_CONFIG

def send_email(subject, content):
    sender_email = EMAIL_CONFIG["email"]
    receiver_email = EMAIL_CONFIG["receiver"]
    password = EMAIL_CONFIG["password"]

    msg = EmailMessage()
    msg.set_content(content)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = receiver_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, password)
        server.send_message(msg)

def notify_user(nft_data):
    subject = f"NFT Update: {nft_data['name']}"
    content = f"New NFT data available: {nft_data}"
    send_email(subject, content)
