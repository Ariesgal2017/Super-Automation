<b>Super-Automation</b> supports the following 10 languages: <i>English</i>, <i>Chinese</i>, <i>Dutch</i>, <i>French</i>, <i>Italian</i>, <i>Japanese</i>, <i>Korean</i>, <i>Portuguese</i>, <i>Russian</i>, and <i>Spanish</i>.


Multi-language tests are run with **pytest** like any other test. Every test method has a one-to-one mapping to every other supported language. <i>Example:</i>
```
self.open(URL) <=> self.开启网址(URL)
```

You can use Super-Automation to selectively translate the method names of any test from one language to another via the console scripts interface. Additionally, the ``import`` line at the top of the Python file will change to import the new ``BaseCase``. Example: ``BaseCase`` becomes ``CasoDeTeste`` when a test is translated into Portuguese.

```bash
super translate
```

```
* Usage:
super translate [SB_FILE.py] [LANGUAGE] [ACTION]

* Languages:
``--en`` / ``--English``  |  ``--zh`` / ``--Chinese``
``--nl`` / ``--Dutch``    |  ``--fr`` / ``--French``
``--it`` / ``--Italian``  |  ``--ja`` / ``--Japanese``
``--ko`` / ``--Korean``   |  ``--pt`` / ``--Portuguese``
``--ru`` / ``--Russian``  |  ``--es`` / ``--Spanish``

* Actions:
``-p`` / ``--print``  (Print translation output to the screen)
``-o`` / ``--overwrite``  (Overwrite the file being translated)
``-c`` / ``--copy``  (Copy the translation to a new ``.py`` file)

* Options:
``-n``  (include line Numbers when using the Print action)

* Examples:
Translate test_1.py into Chinese and only print the output:
>>> Super-Automation translate test_1.py --zh  -p
Translate test_2.py into Portuguese and overwrite the file:
>>> super translate test_2.py --pt  -o
Translate test_3.py into Dutch and make a copy of the file:
>>> super translate test_3.py --nl  -c

* Output:
Translates a Super-Automation Python file into the language
specified. Method calls and ``import`` lines get swapped.
Both a language and an action must be specified.
The ``-p`` action can be paired with one other action.
When running with ``-c`` (or ``--copy``) the new file name
will be the orginal name appended with an underscore
plus the 2-letter language code of the new language.
(Example: Translating ``test_1.py`` into Japanese with
``-c`` will create a new file called ``test_1_ja.py``.)
```
