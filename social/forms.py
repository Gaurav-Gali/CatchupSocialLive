from dataclasses import fields
from django import forms
from .models import Post , Comment, ThreadModel , MessageModel

class PostForm(forms.ModelForm):
    body  = forms.CharField(
        label = '',
        widget = forms.TextInput(attrs = {
            'rows' : 1,
            'placeholder' : "What's On your mind ?"
        })
    )

    # image = forms.ImageField(required = False , label = '',
    #     widget = forms.ClearableFileInput(attrs = {
    #         'multiple' : True
    #     })
    # )

    class Meta:
        model = Post
        fields = ['body']

class CommentForm(forms.ModelForm):
    comment  = forms.CharField(
        label = '',
        widget = forms.TextInput(attrs = {
            'rows' : 1,
            'placeholder' : "Comment..."
        })
    )

    class Meta:
        model = Comment
        fields = ['comment']

class ThreadForm(forms.Form):
    username = forms.CharField(label = '' , max_length = 2000,
    widget = forms.TextInput(attrs = {
            'rows' : 1,
            'placeholder' : "Find a friend to start a convo and CatchUp 😁"
        })
    )
class MessageForm(forms.ModelForm):
    body = forms.CharField(
        label = '',
        max_length = 2000,
        widget = forms.TextInput(attrs = {
            'rows' : 1,
            'placeholder' : "Message ..."
        })
    )

    # image = forms.ImageField(required = False , label = '')

    class Meta:
        model = MessageModel
        fields = [
            'body',
            # 'image'
        ]

class ShareForm(forms.Form):
    body = forms.CharField(
        label = '',
        widget = forms.TextInput(attrs = {
            'rows' : 1,
            'placeholder' : 'Share with a message...'
        })
    )

class ExploreForm(forms.Form):
    query = forms.CharField(
        label = '',
        widget = forms.TextInput(attrs = {
            'placeholder' : 'Explore...'
        })
    )