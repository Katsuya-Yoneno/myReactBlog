.PHONY: commit push

build:
	npm run rebuild

commit: build
	git add .
	git commit -m '$(shell date '+%Y-%m-%d %H:%M:%S')'

push: commit
	git push origin main