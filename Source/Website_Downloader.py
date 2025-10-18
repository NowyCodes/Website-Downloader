# Made by Nowyz

#=-=-=-=-=-=-=-=-=-=-=-=-=#
# PACKAGE IMPORT
from rich.console import Console
from rich.json import JSON
import os
#=-=-=-=-=-=-=-=-=-=-=-=-=#
# CODE
app = Console()

app.print("[bold blue]Website [bold red]Downloader", justify="center")
app.print() # Leaves one space

url = app.input("[bold blue]Website to download (Url): ") # Website Input

with app.status("Downloading", spinner="arrow"):
	url.strip() # Remove all " " spaces
	try:
		if url.startswith("https://"):
			os.system(f"wget --mirror --convert-links --adjust-extension --page-requisites --no-parent {url}")
		else:
			os.system(f"wget --mirror --convert-links --adjust-extension --page-requisites --no-parent {"https://" + url}")
	except Exception as e:
    	app.print(f"[bold red]Oh no! An error has occurred:")
    	app.print(f"[bold yellow]Error details: {e}")
    	app.print("[bold yellow]Please check the following:")
    	app.print("[bold yellow]- Ensure the URL is correct and starts with 'http://' or 'https://'.")
    	app.print("[bold yellow]- Check your internet connection.")
    	app.print("[bold yellow]- Make sure 'wget' is installed and accessible in your system's PATH.")
