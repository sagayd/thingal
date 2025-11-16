# Web Hosting

Important: You must own a domain by purchasing it from a Domain register such as namecheap.com, godaddy.com, etc.
I have mine aobtained from namecheap.com

## Step 1: Setup DNS records in Namecheap
After successful login to namecheap.com, navigate to _Domain List_ > _Advanced DNS_ (https://ap.www.namecheap.com/Domains/DomainControlPanel/thingal.net/advancedns) and added A records
Add the below 4 records:
| Type | Host | Value           | TTL       |
| ---- | ---- | --------------- | --------- |
| A    | @    | 185.199.108.153 | Automatic |
| A    | @    | 185.199.109.153 | Automatic |
| A    | @    | 185.199.110.153 | Automatic |
| A    | @    | 185.199.111.153 | Automatic |

If you put thingal.net as host (instead of @), Namecheap will interpret it as thingal.net.thingal.net, which becomes invalid. The @ represents the root domain.

Create a CNAME record for the www version
| Type  | Host | Value            | TTL       |
| ----- | ---- | ---------------- | --------- |
| CNAME | www  | sagayd.github.io | Automatic |

Important:
My value here is sagayd.github.io, not my repo name (thingal). No text of https:// or /thingal/ in the DNS.
Do not add any 'URL Redirect Record'. GitHub Pages cannot work if the DNS root (@) contains a URL Redirect Record. 

## Step 2: Domain configuration in GitHub pages

After GH pages setup, we can see the pages visible at https://sagayd.github.io/thingal/. This site is served by GitHub webserver. 
To tell GH server to properly serve the custom domain (thingal.net), we have to configure the custom domain.

Go to the repository's Settings page. Navigate to Pages → Custom Domain. Set the value 'thingal.net' and Save. This will create a file called CNAME under GH Pages source path (root directory or docs directory) .

Setup completed.

After DNS setup (5–30 minutes):
https://thingal.net and https://www.thingal.net is my website. HTTPS is enabled automatically.
