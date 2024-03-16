export type TeamInfo = {
  teamID: number;
  teamName: string;
  // include other properties of the team if necessary
};

export type BowlerInfo = {
  bowlerID: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string | null; // Include `null` because some bowlers might not have a middle initial
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  TeamID: number;
  team: TeamInfo; // This is the nested team object
};
