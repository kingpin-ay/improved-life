
# Life Improvement Application

Introducing [Your Life-Improvement Site Name], a comprehensive online platform designed to help you optimize your time and boost your productivity. Our site offers a user-friendly interface that allows you to efficiently schedule and manage your daily tasks and to-dos.

With the powerful combination of Vite.js, React.js, and JavaScript, we have crafted a seamless and intuitive frontend experience. You can easily navigate through the site, create personalized schedules, and track your progress with just a few clicks. Our responsive design ensures compatibility across multiple devices, allowing you to access your schedule anytime, anywhere.

Behind the scenes, our backend is powered by Nest.js and TypeORM, providing a robust foundation for managing and storing your data. We have chosen MySQL as the database to ensure reliability, scalability, and efficient data retrieval.


## Authors

- [@kingpin-ay](https://www.github.com/kingpin-ay)


## Appendix

With our intuitive interface powered by React.js, you can easily schedule and manage your tasks, ensuring that you stay organized and focused on your goals. Our integration of JWT (JSON Web Tokens) enables secure user authentication, providing peace of mind and protecting your personal data.

Through the use of TypeORM, we ensure efficient and reliable communication with the MySQL database, enabling seamless storage and retrieval of your schedules and task information. This powerful combination of technologies guarantees a smooth and responsive user experience.

We've integrated React Query to optimize data fetching and state management, enabling quick and efficient updates to your task lists and schedules. This allows you to stay up-to-date with real-time changes and ensure accurate and synchronized data across multiple devices.

With React Router 6, you can easily navigate between different pages and sections of our site, providing a seamless browsing experience. Whether you need to view your schedules, manage tasks, or access personalized settings, our navigation system ensures effortless movement throughout the platform.

To handle API requests, we've implemented Axios, a versatile and efficient JavaScript library. Axios simplifies the process of making HTTP requests, allowing for smooth communication between the frontend and backend, enhancing the overall performance of our site.




## Run Locally

Clone the project :

```bash
  git clone https://github.com/kingpin-ay/improved-life.git
```

Go to the project :

```bash
  cd improved-life
```


Install dependencies for Frontend and start dev server : 

```bash
  cd frontend
  npm install
  npm run host
```

Install dependencies for Backend and start dev server (assuming you are in the cloned directory):

```bash
  cd backend
  npm install
  npm run start:dev
```

Those will spin up the backend , frontend server now for the database I use mysql server to login to your mysql server account run the below command and it will ask for your password:

```bash
  mysql -u <your_username> -p
```



## Deployment

For deployment I am going to use Docker (but it's still in development phase the docker-compose.yml file provided in it is not tested and cloud break on the run time) :

```bash
  docker compose up
```

