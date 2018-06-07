install-all:
	@yarn install
	@yarn lerna bootstrap
	@make babel-core
	@node ./lib/addScriptsToPkg
	@node ./lib/copyFlowFiles
	@make install-flow-typed

install-flow-typed:
	rm -rf ./flow-typed
	@yarn flow-typed install --verbose
	@yarn lerna run flow-typed
	# FIXME: https://github.com/flowtype/flow-typed/issues/2264
	@yarn flow-typed install jest@v22.0.0

babel-core:
	@$(call babel-build, ./packages/cat-utils)
	@$(call babel-build, .)

babel-all:
	@make babel-clean
	@make babel-core
	@for package in $$(node ./lib/findPackages -i cat-utils -s); do \
	  $(call babel-build, ./packages/$$package); \
  done
	@node ./lib/copyFlowFiles

lint:
	@$(call babel-build, ./packages/eslint-config-cat)
	@yarn lerna run lint --scope eslint-config-cat

test:
	@make babel-all
	@NODE_ENV=test yarn jest --silent ./

babel-clean:
	rm -rf ./lib ./packages/**/lib

clean-all:
	@make babel-clean
	rm -rf ./node_modules ./packages/**/node_modules
	rm -rf ./flow-typed
	rm -rf ./coverage
	rm -rf ./*.log
	rm -rf ./packages/eslint-config-cat/.eslintcache

define babel-build
	yarn babel $(1)/src --out-dir $(1)/lib
endef
