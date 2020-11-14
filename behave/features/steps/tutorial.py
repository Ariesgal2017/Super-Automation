from behave import *


@given(u'I am using behave')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given I am using behave')


@when(u'i implement a test in bdd')
def step_impl(context):
    raise NotImplementedError(u'STEP: When i implement a test in bdd')


@then('behave will test it for us!')
def step_impl(context):
    assert context.failed is False
