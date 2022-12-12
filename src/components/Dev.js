import "./Dev.css";
import app from './img/dev.jpeg'; 

export default function Dev() {
    return  (
        <div className="Dev">
            <h1 className="dev">
                <span>Development</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to use React to develop an 
                interactive interface, use interface components, and tie the 
                components to an internal data state. This interface was meant
                to allow for users to select items out of a list, then 
                aggregate the selected items.
            </p>
            <h2>
                Overview
            </h2>
            <p className="content">
                I decided to create an interface where a user is able to filter 
                a collection of 12 songs, sort the displayed songs, and "like" 
                the songs they want to add to their collection of favorites. 
                This app essentially can serve as a way to create a playlist 
                based on the music the user enjoys; furthermore, by keeping 
                track of the total time of the liked songs, the user can create 
                a "getting ready" or "workout" playlist, where the end of a song 
                or playlist is indicative of the completion of a task.
            </p>
            <h2>
                Architecture
            </h2>
            <p className="content">
                Once I picked my theme for my list and aggregator interface, I 
                decided to include the following features:
                <ul>
                    <li> <span>Filtering:</span> users can filter by genre 
                    (electronic, indie, pop) and artist (Billie Eilish, Hippo
                    Campus, ODESZA, Taylor Swift)
                    </li>
                    <li> <span>Sorting:</span> users can sort by song name 
                    (A-Z and Z-A) or by duration of the songs (low to high 
                    and high to low)
                    </li>
                    <li> <span>Aggregator:</span> users can like songs, which
                    adds them to their "Favorites;" the properity aggregated is 
                    the total duration of all the favorited songs
                    </li>
                    <li> <span>Item Cards:</span> each of the 12 song cards 
                    display the song's name, artist, album cover, duration, and 
                    a button for the user to like and unlike the song
                    </li>
                </ul>
                The interface has the following functionality:
                <ul>
                    <li>Any combination of filters and sorting methods work 
                        together; multiple filters can be applied, but only 
                        one sorting method can be selected at a time, as 
                        denoted by the type of selectors (checkboxes versus 
                        radio buttons)
                    </li>
                    <li>Users can revert the filters and sorting methods back
                        to their original state (without refreshing the page) 
                        by clicking the "Reset Filters/Sort" button
                    </li>
                    <li>Users can add and remove songs from their favorites 
                        by clicking the heart button for each song; the 
                        aggregated duration of the favorited songs will 
                        update accordingly
                    </li>
                </ul>
                Feel free to check out the interface: <a href="https://pensivepenguin333.github.io/development/">
                Playlist Creator</a>!
                <div class="app">
                    <img src={app} />
                </div>
            </p>
            <h2>
                Conclusion
            </h2>
            <p className="content">
                This project helped me gain a much better understanding of 
                having various components of my interface interact with each
                other. Not only that, but it also made me thoroughly consider 
                my design choices in making the interface intuitive for the 
                user. 
            </p>
        </div>
    )
}