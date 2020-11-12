from automation import BaseCase


class GitHubTests(BaseCase):

    def test_github(self):
        if self.headless and (
                self.browser == "chrome" or self.browser == "edge"):
            self.get_new_driver(
                agent="""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) """
                      """AppleWebKit/537.36 (KHTML, like Gecko) """
                      """Chrome/75.0.3770.100 Safari/537.36""")
        self.open("https://github.com/zahed3795/Super-Automation")
        zahed3795 = self.get_text("//a[@title='View all commits by zahed3795']")
        assert (zahed3795, "zahed3795")
