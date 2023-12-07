.PHONY: commit push

commit:
	git add .
	git commit  -m  '$(shell date '+%Y-%m-%d %H:%M:%S')'

push:   commit
	git push origin main