# Execute a series of commands
mkdir ~/projects/revconf-project;
cd ~/projects/revconf-project;
vim index.html

# Only execute each command if prior succeeded
mkdir ~/projects/revconf-project &&
cd ~/projects/revconf-project &&
vim index.html

# Pipe output of one command to another
cat index.html | sed "s/\$title/${talk_title}"




