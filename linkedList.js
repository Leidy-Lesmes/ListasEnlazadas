console.log("Script loaded!")

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++


    };

    print() {
        if (!this.size) {
            return null

        };
        let current = this.head;
        let result = '';
        while (current) {
            result += (`<br><button onclick="remove(current.data)">${current.data}</button><br>`);
            current = current.next;
        };
        return result;
    }

    remove(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                previous = current;
                current = current.next
            };
            return null;
        };

    };

    printmm() {
        if (!this.size) {
            return null
        };
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += '-';
            current = current.next;
        };
        result += 'X';
        return result;
    };

    removeFrom(data) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                this.else--;
                return current.data;
            };
            previous = current;
            current = current.next;
        };
        return null;
    };

    deleting() {
        console.log(":*")
        removeFrom(document.getElementById("texting").value);
    }
};


