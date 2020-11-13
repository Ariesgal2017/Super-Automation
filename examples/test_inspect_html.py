from automation import BaseCase


class MyTestClass(BaseCase):

    def test_html_inspector(self):
        self.open("https://xkcd.com/1144/")
        self.inspect_html()
