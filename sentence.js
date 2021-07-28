class Sentence {

    constructor(resultId, actionId, argIds=[]) {
        this.resultId = resultId
        this.actionId = actionId
        this.argIds = argIds
    }

    eva(env) {

        let action = this._get(this.actionId, env)
        
        let result = action // if the action just a primitive value, not a function

        if (typeof action == "function") {
            let args = this.argIds.map(argId => this._get(argId, env))
            result = action.apply(null, args)
        }

        if (this.resultId) {
            env[this.resultId] = result
        }
    }

    _get(id, env) {
        return env[id]??eval(id)
    }
}

module.exports = Sentence