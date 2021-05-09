import User from './User.model'

export default interface Oppurtunity {
    oppId: number;
    user: User;
	location: string;
	skill: string;
	department: string;
	hiringManager: string;
	startDate: string;
	endDate: string;
	experience: number;
	description: string;
  }
  