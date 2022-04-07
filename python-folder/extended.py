# int() #creates an integer data type
# float() #creates a floating point data type
# str() #creates a string data type

# var = "3"
# print(type(var))

# var=int(var)
# print(type(var))

# var=gloat(var)
# print(type(var))

# def add_up():

#     num1 = input ("what is the first number you like to add up? \n")
#     num2 = input ("What is the second number you'd lik to add up? \n")
# try:
#     print(f"{num1} + {num2} is {(int(num1) + int(num2))}!")

# except:
#     print()

# add_up()

scope = "global"

def function():
    scope = "local"
    print(f"the current scope is {scope}")
    function()


