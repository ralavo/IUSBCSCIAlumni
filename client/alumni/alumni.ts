export class Alumni {

    constructor(public firstName = '',
        public lastName = '',
        public dateOfBirth = '',
        public email = '',
        public address?: string,
        public city?: string,
        public state = '',
        public zip?: string,
        public campus?: string,
        public school?: string,
        public major?: string,
        public graduationYear?: string,
        public companyName = '',
        public companyWeb = '',
        public position = '',
        public jobDesc = '',
        public linkedIn = '',
        public memories = '',
        public recommendation = '',
        ) { }
}