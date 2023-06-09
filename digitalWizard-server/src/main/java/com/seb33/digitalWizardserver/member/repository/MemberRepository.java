package com.seb33.digitalWizardserver.member.repository;

import com.seb33.digitalWizardserver.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email); // 예시로 일단 만들었음 뭘 기준으로 member를 찾을지 의논
}
