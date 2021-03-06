import time
from automation import BaseCase


class MyTestClass(BaseCase):

    def test_proxy(self):
        self.open('https://ipinfo.io/')
        ip_address = self.get_text("div.home-ip-details span.value")[1:-1]
        print("\n\nMy IP Address = %s\n" % ip_address)
        print("Displaying Host Info:")
        print(self.get_text('div.home-ip-details').split('asn: ')[0])
        print("\nThe browser will close automatically in 7 seconds...")
        time.sleep(7)
