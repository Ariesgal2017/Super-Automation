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
    python_requires='>=2.7, !=3.5.*, !=3.6.*, !=3.7.*, !=3.8.*, !=3.9.*',
    install_requires=[
        'pip>=20.2.4',
        'packaging>=20.4',
        'setuptools>=50.3.2',
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
        'more-itertools==8.6.0',
        'cssselect==1.1.0',
        'pluggy==0.13.1',
        'attrs>=20.2.0',
        'py==1.9.0',
        'pytest==6.1.2',
        'pytest-cov==2.10.1',
        'pytest-forked==1.3.0',
        'pytest-html==2.0.1',
        'pytest-metadata==1.10.0',
        'pytest-ordering==0.6',
        'pytest-rerunfailures==9.1.1',
        'pytest-xdist==2.1.0',
        'parameterized==0.7.4',
        'soupsieve==2.0.1',
        'beautifulsoup4==4.9.3',
        'cryptography==3.2.1',
        'pyopenssl==19.1.0',
        'pygments==2.7.2',
        'traitlets==5.0.5',
        'prompt-toolkit==3.0.8',
        'ipython==7.19.0',
        'colorama==0.4.4',
        'importlib-metadata==2.0.0',  # Sync with "virtualenv"
        'virtualenv>=20.1.0',  # Sync with importlib-metadata and pathlib2
        'pymysql==0.10.1',
        'coverage==5.3',
        'brython==3.9.0',
        'pyotp==2.4.1',
        'boto==2.49.0',
        'cffi==1.14.3',
        'rich==9.1.0',
        'zipp==3.4.0',
        'flake8==3.8.4',
        'pyflakes==2.2.0',
        'tornado==6.1',
        'certifi>=2020.6.20',
        'allure-pytest==2.8.19',
        'pdfminer.six==20201018',
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
