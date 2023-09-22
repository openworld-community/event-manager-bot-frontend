interface IReservationData {
  [string: string]: string;
}

export class Reservation {
  adult_ticket_price: string;
  children_ticket_price: string;
  currency: string;
  link: string;
  max_adults: string;
  max_adults_per_reservation: string;
  max_children: string;
  max_children_per_reservation: string;
  name: string;
  remind: string;
  ts: Date;

  constructor(data: IReservationData) {
    this.adult_ticket_price = data.adult_ticket_price;
    this.children_ticket_price = data.children_ticket_price;
    this.currency = data.currency;
    this.link = data.link;
    this.max_adults = data.max_adults;
    this.max_adults_per_reservation = data.max_adults_per_reservation;
    this.max_children = data.max_children;
    this.max_children_per_reservation = data.max_children_per_reservation;
    this.name = data.name;
    this.remind = data.remind;
    this.ts = new Date(data.start);
  }

  toObject() {
    return {
      id: Math.floor(Math.random() * 1000), // generate random id
      adult_ticket_price: +this.adult_ticket_price,
      children_ticket_price: +this.children_ticket_price,
      currency: this.currency,
      link: this.link,
      max_adults: +this.max_adults,
      max_adults_per_reservation: +this.max_adults_per_reservation,
      max_children: +this.max_children,
      max_children_per_reservation: +this.max_children_per_reservation,
      name: this.name,
      remind: +this.remind,
      ts: +this.ts
    };
  }
}
