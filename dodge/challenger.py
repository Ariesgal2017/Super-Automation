from automation import BaseCase


class challenger_2021(BaseCase):

    # UNIT TEST 00001----Test id 00001
    def test_build_2021(self):
        # User Go to https://torqata.com/
        self.open("https://www.dodge.com/")
        self.click("//a[@id='vehicles']")
        self.click("//div[2]//div[1]/div/div/a[1]/div[1]/div[1]/div[2]/div[1]/div[1]"
                   "/div[1]/h2[1][contains(text(),'CHALLENGER')]")
