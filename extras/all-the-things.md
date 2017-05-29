### Full real user name

```bash
$ id -F #  
```

[man id](x-man-page://id)

---

### Possible tput commands for your TTY

```bash
$ infocmp -1 | grep '\E'
```

---

### Terminal shortcut keys

```bash
print_terminal_shortcut_keys() {
  echo -e '\nTerminal shortcut keys:' && \
  sed -e 's/\^/Ctrl+/g;s/M-/Shift+/g;'$'s/^\t//g;''s/cchars://;s/=/ = /g;s/^/· /g' \
  <(stty -a 2>&1 | tr \; $'\n' | grep "\^" | tr -d ' ')
}
```

Prints something like:

```
Terminal shortcut keys:
· discard = Ctrl+O
· dsusp = Ctrl+Y
· eof = Ctrl+D
· erase = Ctrl+?
· intr = Ctrl+C
· kill = Ctrl+U
· lnext = Ctrl+V
· quit = Ctrl+\
· reprint = Ctrl+R
· start = Ctrl+Q
· status = Ctrl+T
· stop = Ctrl+S
· susp = Ctrl+Z
· werase = Ctrl+W
```

---

### The value of $IFS

```
$ cat -etv <<<"$IFS"
```

---

### Environment variables exported by ancestral processes

```
$ env
$ ps -TE > ps-with-env.txt
```

List names of environment variables starting with a substring

```
$ echo ${!BASH*}
```

---

### Default user file creation mode mask (umask)

```
$ umask
```

https://www.cyberciti.biz/tips/understanding-linux-unix-umask-value-usage.html

---

### All command man pages

```
$ apropos . | grep '(1)' | sed -e 's/(1)//' | less
```

---

### Settings for the `man` command

```
$ man -d
```

---

### Location of man pages for a certain topic

```
$ man -aW bash | xargs ls -l
```

---

### Number of current processes

```
$ ps ax | wc -l | tr -d ' '
```

---

### Current readline variable settings

```
$ bind -V
```

---

### Exported environment variables

```
$ export -p
```