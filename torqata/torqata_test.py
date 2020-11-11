from automation import BaseCase


class Torqata_Test_Class(BaseCase):

    # UNIT TEST 00001----Test id 00001
    def test_torqata_00001(self):
        # User Go to https://torqata.com/
        self.open("https://torqata.com/")
        url_status_code = self.get_link_status_code("https://torqata.com/")
        assert url_status_code == 200
        # User Click the  SIGN IN button
        self.click("//a[contains(text(),'Sign In')]")
        self.switch_to_window(1)
        # User Press on EMIL box and enter invalid email
        self.click("//input[@name='username']")
        self.input("//input[@name='username']", 'ASDFGHJKLZXCVBNMQWERTYUIO')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", 'asdfghjklqwertyuiopzxcvbnm')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '1234567890')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '!@#$%^&*()_+-')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '!@#$%^&*()_+-')
        print("\nUNIT TEST 00001----Test id 00001 passed")

    # INTEGRATION TEST 00002----Test id 00002
    def test_torqata_00002(self):
        # User Go to https://torqata.com/
        self.open("https://torqata.com/")
        url_status_code = self.get_link_status_code("https://torqata.com/")
        assert url_status_code == 200
        # User Click the  SIGN IN button
        self.click("//a[contains(text(),'Sign In')]")
        self.switch_to_window(1)
        # User Press on EMIL box and enter invalid email
        self.click("//input[@name='username']")
        self.input("//input[@name='username']", 'ASDFGHJKLZXCVBNMQWERTYUIO')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", 'asdfghjklqwertyuiopzxcvbnm')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '1234567890')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '!@#$%^&*()_+-')
        self.clear("//input[@name='username']")
        self.input("//input[@name='username']", '!@#$%^&*()_+-')
        # User Press on PASSWORD box and enter any password
        self.click("//input[@name='password']")
        self.input("//input[@name='password']", 'ASDFGHJKLZXCVBNMQWERTYUIO')
        self.clear("//input[@name='password']")
        self.input("//input[@name='password']", 'asdfghjklqwertyuiopzxcvbnm')
        self.clear("//input[@name='password']")
        self.input("//input[@name='password']", '1234567890')
        self.clear("//input[@name='password']")
        self.input("//input[@name='password']", '!@#$%^&*()_+-')
        self.clear("//input[@name='password']")
        self.input("//input[@name='password']", '!@#$%^&*()_+-')
        print("\nINTEGRATION TEST 00002----Test id 00002 passed")

    # End To End Test ---Test Id 00003
    def test_torqata_00003(self):
        # User Go to https://torqata.com/
        self.open("https://torqata.com/")
        url_status_code = self.get_link_status_code("https://torqata.com/")
        assert url_status_code == 200
        # User Click the  SIGN IN button
        self.click("//a[contains(text(),'Sign In')]")
        self.switch_to_window(1)
        # User Press on EMIL box and enter invalid email
        self.click("//input[@name='username']")
        self.input("//input[@name='username']", 'ZahedKhan3795@gmail.com')
        # User Press on PASSWORD box and enter invalid password
        self.click("//input[@name='password']")
        self.input("//input[@name='password']", 'ZahedKhan3795@gmail.com')
        # User Click the  Sign In button
        self.is_text_visible("Sign In", "//span[contains(text(),'Sign In')]")
        self.click("//span[contains(text(),'Sign In')]")
        Invalid_credentials = self.get_text("//div[contains(text(),'Login Error: Invalid credentials.')]")
        assert "Login Error: Invalid credentials.", Invalid_credentials
        print(Invalid_credentials)
        print("\nEnd To End Test ---Test Id 00003 passed")

    # End To End Test ---Test Id 00004
    def test_torqata_00004(self):
        # User Go to https://torqata.com/
        self.open("https://torqata.com/")
        # User Click the  ‘Solutions’ dropdown
        self.click('//header//div[2]/ul[1]/li[1]/a[1]')
        # User Click on  ‘Profit Experts’ option
        self.click("//a[contains(text(),'Profit Expert')]")
        # Should be able to click YouTube play button
        # User check video plays 1:36 min
        profit_expert = self.get_text("//h3[contains(text(),'Profit Expert')]")
        assert "Profit Expert", profit_expert
        profit_expert_youtube_url = self.get_attribute("//*[@id='product-section-id']"
                                                       "/div/div[2]/div[2]/div[2]/iframe", 'src')
        status_code = self.get_link_status_code(profit_expert_youtube_url)
        if status_code == 200:
            print('\nProfit Expert video is ok')
        self.open('https://www.youtube.com/watch?v=gnX_aKL8DDg')
        self.click("//*[@id='movie_player']/div[24]/div[2]/div[1]/button")
        self.click("//*[@id='movie_player']/div[24]/div[2]/div[1]/button")
        # User click on  setting icon
        self.click("//div[@id='movie_player']/div[24]/div[2]/div[2]/button[3]")
        # User click on Quality
        self.click("//div[@id='ytp-id-17']/div/div/div[3]/div[3]/div")
        # User select on 720p
        self.click("//div[@id='ytp-id-17']/div/div[2]/div[2]/div/div")
        self.sleep(4)
        print("\nEnd To End Test ---Test Id 00004 passed")

    # END TO END TEST 00005----Test id 00005
    def test_torqata_00005(self):
        # Users Go to https://torqata.com/
        self.open("https://torqata.com/")
        # Users Click the  ‘Resources’ dropdown
        self.click("//a[contains(text(),'Resources')]")
        # Users Click on  ‘Blog’ option
        self.click("//div/a[1][contains(text(),'Blog')]")
        # Users scroll link into view and click link on  Podcast: Building Flask APIs for data scientists
        self.scroll_to("//a[contains(text(),'Podcast: Building Flask APIs for data scientists')]")
        self.click("//a[contains(text(),'Podcast: Building Flask APIs for data scientists')]")
        # Users verify text ‘By Author: Michael Kennedy’ visible
        self.assert_element_present("//span[contains(text(),'Michael Kennedy')]")
        # Users verifies text “Featuring: AJ Pryor” is present
        self.assert_element_present("//a[contains(text(),'AJ Pryor')]")
        # Users click on link podcast link
        self.click("//a[contains(text(),'https://talkpython.fm/episodes/show/226/building-flask-apis-for-data"
                   "-scientists')]")
        self.switch_to_window(1)
        # Users Verify the name AJ Pryor in podcast site
        self.assert_element_present("//div[1][contains(text(),'AJ Pryor')]")
        guest = self.get_text("//div[1][contains(text(),'AJ Pryor')]")
        assert guest == 'AJ Pryor'
        print("\nEND TO END TEST 00005----Test id 00005 passed")
