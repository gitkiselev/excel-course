export class Emitter {
    constructor() {
        this.listeners = {}
    }
    // Уведомляем слушателей, если они есть
    emit(event, ...args) {// dispatch, fire, trigger
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }
    // on, listen подписываемся на уведомления 
    // добавляем нового слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] = 
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}

// const emitter = new Emitter()
// emitter('vladilen', data => console.log('Sub', data));
// emitter.emit(42)
