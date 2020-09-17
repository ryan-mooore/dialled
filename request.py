import requests

url = "https://www.schwalbe.com/en/pressureprof/files/schwalbe/result.php?weight=50&tire=65&rim=30&riding=Trail&ridingskills=Pro&ground=Loose&groundconditions=Wet&filling=Tubeless&carcass=3&frontendlang=en"

r =  requests.get(url)

print(r.status_code)
print(r.headers['content-type'])
