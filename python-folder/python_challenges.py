Activity(1)
# -Create  that holds the text “Welcome to 
# Code Nation”. Find the length of the string and save 
# this to a new variable.

# -Create a function that checks if the string length is 
# even; if it is, print the string, the length and an 
# appropriate message in one sentence. Do the same 
# but with a different message if it’s odd.

# -Change the string length so you can test all 
# possible outcome

welcome = "Welcome to Code Nation"

print(len(welcome))

welcome_length = 22

if (welcome_length % 2) == 0:
    print(f"{welcome_length} is an even number.")
else:
    print(f"{welcome_length} is odd.")



Tutors solution

welcome = "welcome to Code Nation"
welcome_length = len(welcome)

def check_length():
    
# Activity(2)

# -Create a list that represents the alphabet:
# alphabet = ["a", "b", "c", "d"...
# -Create a for loop to iterate through this and print 
# each letter in order
# -Now using input, allow the user to type a number 
# and print the letter it represents in the alphabet.
# -Remember how index works - and think about how 
# to structure your code



# Activity(3)
# Remember the noughts and crosses activity? Let’s revisit 
# that and start to improve with our improved knowledge. 
# Create a structure of functions that allow the player to play 
# against the computer - here is a suggestion:
# Function to start the game, let player choose ‘0’ or ‘X’
# Function to print the board & show the player how to 
# choose spaces
# Function for the player to choose their space
# Function for the computer to take its turn
# Function to check the logic of if there’s a win, lose or draw 
# after every turn is taken
