
package com.example.todo.entity;


import com.fasterxml.jackson.annotation.JsonInclude;

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

    @JsonInclude(JsonInclude.Include.ALWAYS)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Die Aufgabe als Text.
     */
    @Column(nullable = false, length = 250)
    private String title;
    /**
     * Anmerkung
     */
    @Column(length = 2000)
    private String remark;
    /** Erledigungsstatus */
    @Column(nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE")
    @Builder.Default
    private boolean done = false;

}
