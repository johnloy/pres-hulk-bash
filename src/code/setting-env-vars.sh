# Commonly used in ~/.bashrc
export PATH=”/usr/local/bin:${PATH}”

# Not very common, but declare is used for other variable types
declare -x PATH=”/usr/local/bin:${PATH}”

# Set a variable only for the following commands
PATH=”/usr/local/bin:${PATH}” my_command foo bar