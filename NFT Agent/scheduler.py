from apscheduler.schedulers.background import BackgroundScheduler
import time
from db import get_nft_addresses
from fetcher import fetch_nft_data
from notifier import notify_user

def process_nfts():
    nft_addresses = get_nft_addresses()
    
    for nft_address in nft_addresses:
        nft_data = fetch_nft_data(nft_address)
        if nft_data:
            notify_user(nft_data)

scheduler = BackgroundScheduler()
scheduler.add_job(process_nfts, "interval", seconds=30)  # Adjust interval
scheduler.start()

while True:
    time.sleep(1)
