# Basic Goals
 - Allow members with an RFID fob to access restricted machines when inducted.
 - Allow members with an RFID fob to enter the makerspace.
 - Maintain and display a "who in" list visible on discord via MakeyBot with possible opt out functionality. 
 - Maintain a "fire list" of members that are in the space at any given time (logged regardless of opt out status within "who's here".

## Machine Access
### Basics
 - Members use their key fob at a scanner next to the machine. Fob to remain in the machine whilst in use.
 - Access is granted or refused and the result communicated via LEDs/Buzzer.
 - Power is isolated when the fob is removed. Possible timer TBD.

### Possible Extensions
 - Time usage logging.
 - Inductors able to add inductees via the machine scanner.

## Door Access
### Basics
 - Member scans RFID fob, door unlocks. Should be as fast a response as possible.
 - Member door access logged and visible to admin.
 - Members must scan out of the space.
 - Override functionality (?keypad and code).

### Possible extensions
 - Member access only when keyholder present.
 - Last keyholder to leave marks any remaining members as absent.
 - Register new member fobs at the door scanner (with Makeybot)

## Fire List
### Basics
 - A requestable Fire log for the building of members who are "here" requestable by anyone.
 - Fast response from MakeyBot, instant notification advising who requested access to admin/mod team.
 - ?Own discord channel or message

## Technicalities
 - Discord bot to remain a separate entity, graphql access to data.

### Hub/Scanner
 - ESP brain.
 - Graphql access to data.
 - 16A relay upstream of NVR. 3 phase TBD
 - RFID scanner.
 - Built in PSU.

### Web Interface
 - Discord login only. Help non-techy members to create an account.
 - Members to see their own role, entry/exit log, machine inductions given and received, machine time if implemented.
 - Inductors to see above plus add inductions for other members.
 - Admin to see above for all members, manage roles, create inductors, see connected machines, logs etc.

### Tech stack
 - Primarily local for speed. WWW interface to be investigated.
 - NextJS
 - Next Auth
 - Supabase DB (local)
 - GraphQL layer for integration with Makeybot
 - UI TBD
