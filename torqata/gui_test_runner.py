"""
GUI TEST RUNNER
Run by Typing: "python gui_test_runner.py"
(Use Python 3 - There are GUI issues when using Python 2)
"""

import os
import sys
if sys.version_info[0] >= 3:
    from tkinter import Tk, Frame, Button, Label
else:
    from Tkinter import Tk, Frame, Button, Label


class App:

    def __init__(self, master):
        frame = Frame(master)
        frame.pack()
        self.label = Label(root, width=40).pack()
        self.title = Label(frame, text="", fg="black").pack()
        self.title1 = Label(
            frame, text=("Run a Test in Chrome:"), fg="blue").pack()
        self.run1 = Button(
            frame, command=self.run_1,
            text=("pytest torqata_test.py --browser=chrome"),
            fg="green").pack()
        self.title2 = Label(
            frame, text=("Run a Test in Firefox:"), fg="blue").pack()
        self.run2 = Button(
            frame, command=self.run_2,
            text=("pytest torqata_test.py --browser=firefox"),
            fg="green").pack()
        self.title3 = Label(
            frame, text="Run a Test with Demo Mode:", fg="blue").pack()
        self.run3 = Button(
            frame, command=self.run_3,
            text=("pytest torqata_test.py --browser=chrome --demo_mode"),
            fg="green").pack()
        self.title6 = Label(
            frame,
            text="Run a Failing Test Suite with a Test Report:",
            fg="blue").pack()
        self.run6 = Button(
            frame, command=self.run_4,
            text=("pytest torqata_test.py --browser=chrome --html=report.html"),
            fg="red").pack()
        self.end_title = Label(frame, text="", fg="black").pack()
        self.quit = Button(frame, text="QUIT", command=frame.quit).pack()

    def run_1(self):
        os.system(
            'pytest torqata_test.py --browser=chrome')

    def run_2(self):
        os.system(
            'pytest torqata_test.py --browser=firefox')

    def run_3(self):
        os.system(
            'pytest torqata_test.py --browser=chrome --demo_mode')

    def run_4(self):
        os.system(
            'pytest torqata_test.py --browser=chrome --html=report.html')


if __name__ == "__main__":
    root = Tk()
    root.title("Select Test Job To Run")
    root.minsize(500, 420)
    app = App(root)
    root.mainloop()
