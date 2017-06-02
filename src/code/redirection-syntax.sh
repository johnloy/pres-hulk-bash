# There's always a source and destination
cat source_file > dest_file

# There's always a gt or lt sign pointing to the destination
dest_command < source_file

# File descriptors will always be numbers
2>/dev/null

# When pointing to the current referenced file, &
2>&1

# Lone & on the left is always stdout and stderr
&>/dev/null # & expands to fd 1 and 2

# No fd on the left with > defaults to stdout
>/dev/null

# No fd on the left with < default to stdin
<&-