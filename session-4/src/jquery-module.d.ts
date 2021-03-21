declare module jquery {
    interface JqueryInstance {
        html: (html: string) => JqueryInstance
    }

    function $(readFn: () => void): void
    function $(selector: string): JqueryInstance

    namespace $ {
        namespace fn {
            class init {
            }
        }
    }

    export = $
}
