import React from 'react';
import styles from "./File.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export const File =  () => {
    return (
        <section className={styles.container}>
        <div>
            <a className={styles.contactBtn} href='PRIYANSHI_AMIN.pdf' download="priyanshi.pdf">
            <FontAwesomeIcon icon={faDownload} size="xs"/>  Download Resume
            </a>
        </div>
        </section>
    )
}
