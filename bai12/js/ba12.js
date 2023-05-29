function Student() {
        this.name = 'Nguyen Van A'
        this.email = 'aaaaa@gmail.com'
        this.getname = function() {
            return this.name
        }
        this.aaa = function() {
            return this.email
        }
}
let item = new Student
console.log (item.aaa())