"""
The setup package to install Framework dependencies and plugins
(Uses selenium, requests, SQL and is compatible with Python 3.5+)
"""

from setuptools import setup, find_packages  # noqa
import os
import sys


this_dir = os.path.abspath(os.path.dirname(__file__))
long_description = None
total_description = None

long_description = 'The complete web automation library.'
about = {}
# Get the package version from the automation/__version__.py file
with open(os.path.join(
        this_dir, 'automation', '__version__.py'), 'rb') as f:
    exec(f.read().decode('utf-8'), about)

setup(
    name='automation',
    version=about['__version__'],
    description='The complete web automation library for end-to-end testing.',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/zahed3795/Super-Automation',
    platforms=["Windows", "Linux", "Mac OS-X"],
    author='Zahed Khan',
    author_email='zahedkhan3795@gmail.com',
    maintainer='Zahed Khan',
    license="MIT",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Environment :: MacOS X",
        "Environment :: Win32 (MS Windows)",
        "Environment :: Web Environment",
        "Framework :: Pytest",
        "Intended Audience :: Developers",
        "Intended Audience :: Information Technology",
        "License :: OSI Approved :: MIT License",
        "Operating System :: MacOS :: MacOS X",
        "Operating System :: Microsoft :: Windows",
        "Operating System :: POSIX :: Linux",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Topic :: Internet",
        "Topic :: Scientific/Engineering",
        "Topic :: Software Development",
        "Topic :: Software Development :: Quality Assurance",
        "Topic :: Software Development :: Libraries",
        "Topic :: Software Development :: Testing",
        "Topic :: Software Development :: Testing :: Acceptance",
        "Topic :: Software Development :: Testing :: End to End",
        "Topic :: Utilities",
    ],
    python_requires='>=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*',
    install_requires=[
        'pip>=20.2.4',
        'packaging>=20.4',
        'setuptools>=44.1.1;python_version<"3.5"',
        'setuptools>=50.3.2;python_version>="3.5"',
        'setuptools-scm',
        'wheel>=0.35.1',
        'six',
        'nose',
        'ipdb',
        'parso==0.7.1',  # The last version for Python 2 and 3.5
        'jedi==0.17.2',  # The last version for Python 2 and 3.5
        'idna==2.10',  # Must stay in sync with "requests"
        'chardet==3.0.4',  # Must stay in sync with "requests"
        'urllib3==1.25.11',  # Must stay in sync with "requests"
        'requests==2.24.0',
        'selenium==3.141.0',
        'msedge-selenium-tools==3.141.2',
        'more-itertools==5.0.0;python_version<"3.5"',
        'more-itertools==8.6.0;python_version>="3.5"',
        'cssselect==1.1.0',
        'pluggy==0.13.1',
        'attrs>=20.2.0',
        'py==1.8.1;python_version<"3.5"',
        'py==1.9.0;python_version>="3.5"',
        'pytest==4.6.11;python_version<"3.5"',
        'pytest==6.1.2;python_version>="3.5"',
        'pytest-cov==2.10.1',
        'pytest-forked==1.3.0',
        'pytest-html==1.22.1;python_version<"3.6"',
        'pytest-html==2.0.1;python_version>="3.6"',
        'pytest-metadata==1.8.0;python_version<"3.6"',
        'pytest-metadata==1.10.0;python_version>="3.6"',
        'pytest-ordering==0.6',
        'pytest-rerunfailures==8.0;python_version<"3.5"',
        'pytest-rerunfailures==9.1.1;python_version>="3.5"',
        'pytest-xdist==1.34.0;python_version<"3.5"',
        'pytest-xdist==2.1.0;python_version>="3.5"',
        'parameterized==0.7.4',
        'soupsieve==1.9.6;python_version<"3.5"',
        'soupsieve==2.0.1;python_version>="3.5"',
        'beautifulsoup4==4.9.3',
        'cryptography==3.0;python_version<"3.6"',
        'cryptography==3.2.1;python_version>="3.6"',
        'pyopenssl==19.1.0',
        'pygments==2.5.2;python_version<"3.5"',
        'pygments==2.7.2;python_version>="3.5"',
        'traitlets==4.3.3;python_version<"3.7"',
        'traitlets==5.0.5;python_version>="3.7"',
        'ipython==5.10.0;python_version<"3.5"',
        'prompt-toolkit==1.0.18;python_version<"3.6"',
        'prompt-toolkit==3.0.8;python_version>="3.6"',
        'ipython==6.5.0;python_version>="3.5" and python_version<"3.6"',
        'ipython==7.16.1;python_version>="3.6" and python_version<"3.7"',
        'ipython==7.19.0;python_version>="3.7"',
        'colorama==0.4.4',
        'pathlib2==2.3.5;python_version<"3.5"',  # Sync with "virtualenv"
        'importlib-metadata==2.0.0',  # Sync with "virtualenv"
        'virtualenv>=20.1.0',  # Sync with importlib-metadata and pathlib2
        'pymysql==0.10.1',
        'coverage==5.3',
        'brython==3.9.0',
        'pyotp==2.4.1',
        'boto==2.49.0',
        'cffi==1.14.3',
        'rich==9.1.0;python_version>="3.6" and python_version<"4.0"',
        'zipp==1.2.0;python_version<"3.6"',
        'zipp==3.4.0;python_version>="3.6"',
        'flake8==3.7.9;python_version<"3.5"',
        'flake8==3.8.4;python_version>="3.5"',
        'pyflakes==2.1.1;python_version<"3.5"',
        'pyflakes==2.2.0;python_version>="3.5"',
        'tornado==5.1.1;python_version<"3.5"',
        'tornado==6.1;python_version>="3.5"',
        'certifi>=2020.6.20',
        'allure-pytest==2.8.19',
        'pdfminer.six==20191110;python_version<"3.5"',
        'pdfminer.six==20201018;python_version>="3.5"',
    ],
    packages=[
        'automation',
        'automation.common',
        'automation.config',
        'automation.console_scripts',
        'automation.core',
        'automation.drivers',
        'automation.extensions',
        'automation.fixtures',
        'automation.manual_qa',
        'automation.plugins',
        'automation.translate',
        'automation.utilities',
        'automation.utilities.selenium_grid',
        'automation.utilities.selenium_ide',
        'automation.virtual_display',
    ],
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'automation = automation.console_scripts.run:main',
            'sdet = automation.console_scripts.run:main',  # Simplified name
            'zahed = automation.console_scripts.run:main',  # Simplified name
        ],
        'nose.plugins': [
            'base_plugin = automation.plugins.base_plugin:Base',
            'selenium = automation.plugins.selenium_plugin:SeleniumBrowser',
            'page_source = automation.plugins.page_source:PageSource',
            'screen_shots = automation.plugins.screen_shots:ScreenShots',
            'test_info = automation.plugins.basic_test_info:BasicTestInfo',
            ('db_reporting = '
             'automation.plugins.db_reporting_plugin:DBReporting'),
            's3_logging = automation.plugins.s3_logging_plugin:S3Logging',
        ],
        'pytest11': ['automation = automation.plugins.pytest_plugin']
    }
)

print("\n*** Super-Automation Installation Complete! ***\n")
