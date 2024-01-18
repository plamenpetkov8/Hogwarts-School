# Hogwarts - school for witchcraft and wizardry

## This is a fan-art GUI providing the user with the ability to dive into the Magical World of Hogwarts and enjoy this amazing moment:

1. Initially, each wizard/witch gets nagivated to the Homepage of the application giving them a last opportunity to check out the four main Houses and choose wizely.
2. Then, when the crucial final decision is made, each one could click on the "Apply" button in the header
3. This action will trigger the opening of a Hogwarts Admission Form that needs to
   be filled in correctly and only by yourselves, no enchanted quills allowed!
4. Upon the latters submission a confirmation message will be popped up that everything went well. Additionally, detailed instructions would be provided what to expect and do next.
5. On the other hand, if at any point anyone gets hindered by anything, please do
   not hesitate to visit our "Contact" page where one could get help by none other than Cornelius Fudge!
6. Have fun!!!

**NOTE:** There is a theme tune sounding in the background. Unfortunatelly, most of te browsers do not allow the auto-play feature so you just have to click somewhere on the app to activate it (it really does not matter where)

## How to build and start the project

### Tech Stack used

NodeJS(16), React(18)

### Prerequisites

The project was developed using Node 16 (You could use `nvm` to easily install and switch between different versions of `node`). Additionally, the `OS` used was `OpenSUSE 15.3` and there should be no problems with the installation process on other Linux distrubitions. Follow these steps to build and observe the application:

1. Download in a directory of your choosing using any of the following:

   - Over SSH:
     `git clone git@github.com:plamenpetkov8/Hogwarts-School.git`
   - over HTTP:
     `git clone https://github.com/plamenpetkov8/Hogwarts-School.git`

2. Navigate to the root of the newly dowloaded project
3. Install module's dependencies:
   ```bash
   npm install
   ```
4. Build the project:

   ```bash
   npm run build
   ```

   **NOTE:** The above command will produce a **./dist** folder where our built project will reside

5. Install a useful tool that would host our newly built app:
   ```bash
   npm install -g serve
   ```
6. Host our app:

   ```bash
   serve -p <host_port> -s dist
   ```

   **Placeholders:**

   - **host_port:** The port we are telling **`serve`** to serve our gui on locally

   **Example:**

   ```bash
   serve -p 3000 -s dist
   ```

7. In the terminal you could see a rectangle with a green border looking like this:

   ![Alt text](img/installation-thumbnail.png)

8. Use any of the addresses provided to view the App!
9. Enjoy!
