export interface EmailAddress {
  address: string;
  name?: string;
}

export interface Email {
  text: string;
  subject: string;
  properties: Property[];
}
