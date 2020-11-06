export class Customer {

  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public sendCatalog = false,
    public phone = '',
    public notification = '',
    public rating = '',
    public addressType = 'home',
    public street1?: string,
    public street2?: string,
    public city?: string,
    public state = '',
    public zip?: string) { }
}
