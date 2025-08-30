-- Update placement eligibility for all students based on new criteria (no backlogs and >= 50% aggregate)
-- This will update both 5th and 7th semester students in one go
UPDATE students 
SET placement_eligible = (active_backlogs = 0 AND aggregate_percentage >= 50)
WHERE true;
