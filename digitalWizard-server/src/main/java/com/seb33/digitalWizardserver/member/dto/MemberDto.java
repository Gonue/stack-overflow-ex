package com.seb33.digitalWizardserver.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class PostMember{
        @Email(message = "올바른 이메일 형태가 아닙니다.")
        private String email;
        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;
        private String memberNickName;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;
        private String memberNickName;
        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password; // 비번 변경 요청시 비밀번호 입력하도록 나중에 기능 추가

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ProfileImage {
        private String profileImage;
    }

    @Getter
    @AllArgsConstructor
    public static class PostMemberDetail{
        private String location;
        private String title;
        private String aboutMe;
    }
}
