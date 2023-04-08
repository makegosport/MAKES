# Basic Goals
 - Allow members with an RFID fob to access restricted machines when inducted.
 - ALlow members with an RFID key fob to enter the makerspace.
 - Maintain a "fire list" of members that are in the space at any given time.


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

### Possible extensions
 - Member access only when keyholder present.
 - Last keyholder to leave marks any remaining members as absent.
 - Register new member fobs at the door scanner (with Makeybot)

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
