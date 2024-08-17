import Image from "next/image";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className={`w-full max-w-5xl items-center ${urbanist.className}`}>
        <header>
          <h3>The LUCY</h3>
          <h2>House Rules</h2>
          <p className="address">230 W 1300 S St<br />Salt Lake City, UT 84115</p>
        </header>
        <div className="moving">
          <div className="rules">
            <h2>Moving in or out of The LUCY</h2>

            <h3>Moving must Always be Scheduled in Advance</h3>
            <p>All new and existing residents must make an appointment to meet with the building manager during his normal hours, Monday-Friday 9:00-4:00 pm to coordinate moving in or out of the building. It is recommended residents contact the HOA building manager at least one week prior the move.</p>
            <p>At the meeting:</p>
            <ul>
              <li>A date for the physical moving of belongings will be set, and moving rules reviewed.</li>
              <li>Residents will pay transfer fees and complete paperwork to be granted access to the secured building.</li>
              <li>Security fobs will be issued.</li>
              <li>New residents will receive a brief building orientation.</li>
            </ul>
            <p>Moving out of the LUCY requires the same coordination with the Building manager.</p>

            <h3>Hours for Physically Moving Belongings / Furniture</h3>
            <p>Monday - Saturday: 8:00 am - 6:00 pm.</p>

            <h3>Fees</h3>
            <p>There are fees to transfer in & out of the building (change ownership or residents). Fees will be itemized when you meet with the building manager.</p>

            <h3>{`New Resident's Welcome Meeting`}</h3>
            <p>All new residents are required to meet with the board of trustees after moving into the LUCY.</p>

            <h3>Front Lobby</h3>
            <p>All moving must be conducted through the B2 garage and elevator entrances. Nothing should be moved through the front lobby with the multiple sets of glass doors.</p>

            <h3>Loading / Unloading</h3>
            <p>Moving vans must park on the street in front of the building and all materials must enter the building via the B2 garage door and B2 elevator entrance. No parking is allowed on the garage levels or driveways for loading or unloading during moving, other than the {`resident's`} own parking stall.</p>

            <h3>Education of Movers</h3>
            <p>The resident moving is responsible for conveying these rules to the workers performing the move.</p>

            <h3>B2 Garage Door</h3>
            <p>The garage door can be deactivated during the move by the building manager, but must be reactivated at the end of the moving process.</p>

            <h3>Security Doors</h3>
            <p>The security door to the B2 elevator lobby must not be left open and unattended during the moving process. It is easy to be locked out of the building.</p>

            <h3>Elevators</h3>
            <p>Only the south elevator is to be used for moving. The elevator must be padded during the moving process. A key can be obtained from the building manager to control the elevator during the move.</p>

            <h3>Pets</h3>
            <p>Pets are not permitted in the building at any time.</p>

            <h3>Damage</h3>
            <p>The owner of the unit moving is liable for any damage to the common areas caused by the moving process.</p>
          </div>
        </div>
        <div className="general">
          <div className="rules">
            <h2>General Rules</h2>

            <h3>Resident Registration</h3>
            <p>All residents of the building must be registered with the HOA.</p>

            <h3>Entrances / Security</h3>
            <p>All residents of the LUCY are responsible to maintain building security. Make certain security doors close behind you when entering or leaving, including garage doors. Do not let anyone you do not know into the building.</p>

            <h3>Noise</h3>
            <p>Noise can be transmitted through the structure of the building and impact other residents. Designated quiet hours are from 10 pm to 8 am. Keep noise to a minimum in the hallways.</p>

            <h3>Owner Conduct</h3>
            <p>Owners, Residents, and their guests are expected to conduct themselves civilly and respectfully at all times. Demeaning language, vulgarity, and other disruptive behaviors are prohibited.</p>

            <h3>Construction & Remodeling</h3>
            <p>These activities impact other residents significantly. HOA pre-approval is required. Please see the separate tab, Construction.</p>

            <h3>Pets</h3>
            <p>Pets are not permitted in the building at any time.</p>

            <h3>No Smoking</h3>
            <p>The LUCY is a non-smoking property. Smoking is not permitted anywhere in the building or on the grounds.</p>

            <h3>Litter</h3>
            <p>Help keep the building and grounds clean. If you drop or spill something, it is your responsibility to clean it immediately.</p>

            <h3>Front Lobby</h3>
            <p>Large delivered items must be transported through the B2 parking level entrances, not through the front lobby.</p>

            <h3>Unattended Children</h3>
            <p>Children are not permitted to play in the halls, elevators, stairwells, or common areas unattended.</p>

            <h3>Leasing / Renting</h3>
            <p>Please see Leasing Tab for more information. Lessees must meet with the board of trustees.</p>

            <h3>Balcony Doors</h3>
            <p>The sliding glass doors should be opened and closed slowly to reduce noise transmission to other units.</p>

            <h3>Barbecues</h3>
            <p>Gas grills are prohibited. Balcony cooking is restricted to electric barbecues only.</p>

            <h3>Trash Disposal</h3>
            <p>Trash and recycling dumpsters are located on the east side of B2 parking.</p>

            <h3>Swimming Pool</h3>
            <p>Residents and their guests must follow the rules posted in the pool area. The pool is for the exclusive use of owners, residents, and their guests.</p>

            <h3>The LUCY Room</h3>
            <p>The LUCY Room may be reserved by residents for events. The room must be left clean after use.</p>

            <h3>Commercial Unit</h3>
            <p>Pedestrian traffic involving commercial units must use the commercial entrance on the north side of the building.</p>
          </div>
        </div>
        <div className="administration">
          <div className="rules">
            <h2>Administration Rules</h2>

            <h3>HOA Monthly Fees</h3>
            <p>The HOA fee is due on the 1st of each month. Late fees apply after the 10th.</p>

            <h3>New Residents</h3>
            <p>All new residents are required to meet with the board of trustees after moving into the LUCY.</p>

            <h3>Security Keys</h3>
            <p>Building security fobs are the property of the HOA and may not be duplicated.</p>

            <h3>Unit Keys</h3>
            <p>The HOA must maintain working copies of all unit keys for emergency purposes.</p>

            <h3>Resident Entry Phone</h3>
            <p>The entry phone allows residents to provide access to guests.</p>

            <h3>Fines</h3>
            <p>Violations of these rules may result in fines levied by the board of trustees.</p>

            <h3>Suggestions / Complaints</h3>
            <p>All suggestions or complaints should be in writing and addressed to The LUCY Condominium Homeowners Association Board of Trustees.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
