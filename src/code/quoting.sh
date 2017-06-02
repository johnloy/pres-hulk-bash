# Escaping special meaning with backslash
cat some/file/With\ spaces\ in\ it.tsv'

# Strong quotes escape all special meaning, except \
cat 'some/file/With spaces in it.tsv'

# Weak quotes escape most special meaning, while
# still allowing for variable and command substitution
cat "${path_var}/With spaces in it.tsv"

