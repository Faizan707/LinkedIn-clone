'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/store/useUserStore';
import { CirclePlus } from 'lucide-react';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { getNames } from 'country-list';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectLabel } from '@radix-ui/react-select';
import axiosInstance from '@/lib/axios';

type Experience = {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
};

type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
};

function Profile() {
  const { user } = useUserStore();
  const countries = getNames();

  const [coverImage, setCoverImage] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const [experience, setExperience] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  const [expInput, setExpInput] = useState<Experience>({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [eduInput, setEduInput] = useState<Education>({
    school: '',
    degree: '',
    fieldOfStudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => fileInputRef.current?.click();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const createProfile = async () => {
    const payload = {
      userId: user?.id,
      bio,
      location,
      website,
      skills,
      experience,
      education,
    };

    try {
      const res = await axiosInstance.post('/create-profile', payload);
      console.log('Profile created:', res.data);
    } catch (err) {
      console.error('Error creating profile:', err);
    }
  };

  const addExperience = () => {
    setExperience(prev => [...prev, expInput]);
    setExpInput({
      title: '',
      company: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
    });
  };

  const addEducation = () => {
    setEducation(prev => [...prev, eduInput]);
    setEduInput({
      school: '',
      degree: '',
      fieldOfStudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
    });
  };

  return (
    <div className="relative mx-auto h-full max-w-[900px] pb-10">
      <div className="relative h-[400px] w-full overflow-hidden bg-gray-300">
        {coverImage && (
          <Image
            src={coverImage}
            alt="Cover Preview"
            fill
            className="object-cover"
          />
        )}
        <Button
          onClick={handleButtonClick}
          className="absolute top-4 right-5 z-10 rounded-full border bg-gray-100 text-blue-500 hover:bg-blue-200"
        >
          <CirclePlus />
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          hidden
        />
      </div>

      <div className="relative flex flex-col">
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            width={150}
            height={150}
            className="absolute top-[-150px] left-20 rounded-full object-cover ring-4 ring-white"
          />
        ) : (
          <div className="absolute top-[-205px] left-20 flex h-[200px] w-[200px] items-center justify-center rounded-full bg-gray-400 text-4xl font-semibold text-white ring-4 ring-white">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
        )}
      </div>

      <div className="mt-10 space-y-6 px-4">
        <p className="text-xl font-bold">{user?.name}</p>

        <Textarea
          placeholder="Add your bio"
          onChange={e => setBio(e.target.value)}
        />

        <Select onValueChange={value => setLocation(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              {countries.map(country => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div>
          <label>Add Website</label>
          <Input
            placeholder="Add your Website Link"
            onChange={e => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <label>Add Skills</label>
          <Input
            placeholder="Type a skill and press Enter"
            onKeyDown={e => {
              if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                e.preventDefault();
                const val = e.currentTarget.value.trim();
                if (!skills.includes(val)) setSkills(prev => [...prev, val]);
                e.currentTarget.value = '';
              }
            }}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                {skill}
                <button
                  onClick={() =>
                    setSkills(skills.filter((_, idx) => idx !== i))
                  }
                  className="text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-6">
          <p className="text-lg font-semibold">Experience</p>
          <div className="space-y-2">
            <Input
              placeholder="Title"
              value={expInput.title}
              onChange={e =>
                setExpInput(prev => ({ ...prev, title: e.target.value }))
              }
            />
            <Input
              placeholder="Company"
              value={expInput.company}
              onChange={e =>
                setExpInput(prev => ({ ...prev, company: e.target.value }))
              }
            />
            <Input
              placeholder="Location"
              value={expInput.location}
              onChange={e =>
                setExpInput(prev => ({ ...prev, location: e.target.value }))
              }
            />
            <Input
              placeholder="From"
              type="date"
              value={expInput.from}
              onChange={e =>
                setExpInput(prev => ({ ...prev, from: e.target.value }))
              }
            />
            <Input
              placeholder="To"
              type="date"
              value={expInput.to}
              onChange={e =>
                setExpInput(prev => ({ ...prev, to: e.target.value }))
              }
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={expInput.current}
                onChange={e =>
                  setExpInput(prev => ({ ...prev, current: e.target.checked }))
                }
              />
              Current
            </label>
            <Textarea
              placeholder="Description"
              value={expInput.description}
              onChange={e =>
                setExpInput(prev => ({ ...prev, description: e.target.value }))
              }
            />
            <Button onClick={addExperience}>Add Experience</Button>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <p className="text-lg font-semibold">Education</p>
          <div className="space-y-2">
            <Input
              placeholder="School"
              value={eduInput.school}
              onChange={e =>
                setEduInput(prev => ({ ...prev, school: e.target.value }))
              }
            />
            <Input
              placeholder="Degree"
              value={eduInput.degree}
              onChange={e =>
                setEduInput(prev => ({ ...prev, degree: e.target.value }))
              }
            />
            <Input
              placeholder="Field of Study"
              value={eduInput.fieldOfStudy}
              onChange={e =>
                setEduInput(prev => ({
                  ...prev,
                  fieldOfStudy: e.target.value,
                }))
              }
            />
            <Input
              placeholder="From"
              type="date"
              value={eduInput.from}
              onChange={e =>
                setEduInput(prev => ({ ...prev, from: e.target.value }))
              }
            />
            <Input
              placeholder="To"
              type="date"
              value={eduInput.to}
              onChange={e =>
                setEduInput(prev => ({ ...prev, to: e.target.value }))
              }
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={eduInput.current}
                onChange={e =>
                  setEduInput(prev => ({ ...prev, current: e.target.checked }))
                }
              />
              Current
            </label>
            <Textarea
              placeholder="Description"
              value={eduInput.description}
              onChange={e =>
                setEduInput(prev => ({ ...prev, description: e.target.value }))
              }
            />
            <Button onClick={addEducation}>Add Education</Button>
          </div>
        </div>

        <Button className="mt-8" onClick={createProfile}>
          Create Profile
        </Button>
      </div>
    </div>
  );
}

export default Profile;
