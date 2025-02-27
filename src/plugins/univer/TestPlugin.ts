import { Inject, Injector, Plugin } from '@univerjs/core'

/**
 * Import CSV Button Plugin
 * A simple Plugin example, show how to write a plugin.
 */
class TestPlugin extends Plugin {
  static override pluginName = 'test-plugin'

  constructor(
    // inject injector, required
    @Inject(Injector) override readonly _injector: Injector
  ) {
    super()
  }

  /** Plugin onStarting lifecycle */
  onStarting() {
    console.log('test-plugin: onStarting') // todo something
  }
}

export default TestPlugin
