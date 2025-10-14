// app/compliance/[role]/nin.tsx
import { useLocalSearchParams } from "expo-router";
import NINForm from "@/components/compliance/NINForm";

export default function RoleNIN() {
  const { role } = useLocalSearchParams<{ role: string }>();
  return <NINForm role={role} />;
}
