var password;

var pass1="20905Lin";

password = prompt('Please enter password to view page', '');
if (password==pass1)
	alert('Correct password, click OK to enter.');
else
{
	window.location = "http://www.yuexudesign.com";
}