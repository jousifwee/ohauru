
package com.example.todo.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = "id")
@ToString(exclude = { "sensibleFelder" })
    @Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Die Aufgabe als Text.
     */
    @Column(length = 250)
    private String title;
    /**
     * Anmerkung
     */
    @Column(length = 2000)
    private String remark;
    /** Erledigungsstatus */
    @Column
    private boolean done;

}
