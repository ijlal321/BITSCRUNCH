import requests
from config import NFT_API_URL

def fetch_nft_data(nft_address):
    url = f"{NFT_API_URL}/{nft_address}"  # Replace with real API
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    return None
