"use client";

import { useState } from "react";
import axios from "axios";
import Button from "../reusables/Button";
import { BASE_API_URL } from "@/lib/utils";

export default function InvitationForm() {
  const [loading, setLoading] = useState(false);
  const [inviteLink, setInviteLink] = useState("");

  const handleGenerateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // POST request to your backend to generate the link
      const response = await axios.post(`${BASE_API_URL}/invite`);
      setInviteLink(response.data.inviteLink);
    } catch (error) {
      console.error(error);
      alert("Error generating invite link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleGenerateLink}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6 max-w-md mx-auto w-full"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Generate Employee Invitation Link
      </h2>

      <Button loading={loading}>
        {loading ? "Generating..." : "Generate Invite Link"}
      </Button>

      {inviteLink && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-sm">
          <p className="text-green-700 font-medium mb-1">
            Invite Link Generated:
          </p>
          <a
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline break-all"
          >
            {inviteLink}
          </a>
        </div>
      )}
    </form>
  );
}
